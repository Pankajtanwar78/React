from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
from bson import ObjectId

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/checklistdb'  # Replace with your MongoDB URI
mongo = PyMongo(app)

# Enable CORS for all routes
CORS(app, resources={r"/checklist/*": {"origins": "http://localhost:5173"}})

# MongoDB Collection
checklist_collection = mongo.db.checklist

@app.route('/checklist', methods=['GET'])
def get_checklist():
    
    checklist = list(checklist_collection.find())
    serialized_checklist = []
    for item in checklist:
        serialized_item = {
            'id': str(item['id']),  # Convert ObjectId to string
            'itemDescription': item['itemDescription'],
            'quantity': item['quantity'],
            'packed': item['packed']
        }
        serialized_checklist.append(serialized_item)

    return jsonify({'checklist': serialized_checklist})

@app.route('/checklist', methods=['POST'])
def add_item():
    item_description = request.json['itemDescription']
    quantity = request.json.get('quantity', 1)
    packed = request.json.get('packed', False)

    new_item = {
        'itemDescription': item_description,
        'quantity': quantity,
        'packed': packed,
        'id': ObjectId()  # Automatically generate a new unique ObjectId
    }

    checklist_collection.insert_one(new_item)
    return jsonify({'message': 'Item added successfully'})

@app.route('/checklist/<string:item_id>', methods=['PUT'])
def update_item(item_id):
    # Find the current item
    item = checklist_collection.find_one({'id': ObjectId(item_id)})

    if item:
        # Toggle the packed value
        new_packed_value = not item['packed']
        checklist_collection.update_one(
            {'id': ObjectId(item_id)},
            {'$set': {'packed': new_packed_value}}
        )
        return jsonify({'message': 'Item updated successfully', 'packed': new_packed_value})
    else:
        return jsonify({'message': 'Item not found'}), 404

@app.route('/checklist/<string:item_id>', methods=['DELETE'])
def delete_item(item_id):
    checklist_collection.delete_one({'id': ObjectId(item_id)})
    return jsonify({'message': 'Item deleted successfully'})
    
@app.route('/checklist/delete-all', methods=['DELETE'])
def delete_all_items():
    checklist_collection.delete_many({})
    return jsonify({'message': 'All items deleted successfully'})

if __name__ == '__main__':
    app.run(debug=True)
