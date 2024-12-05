import axios from 'axios';
import { useEffect, useState } from 'react';
import TravelListHeader from './TravelListHeader';
import TravelListBody from './TravelListBody';
import TravelListFooter from './TravelListFooter';
import { StyledContainer } from './styles/TravelList.styles';

type TravelItem = {
  itemDescription: string;
  quantity: number;
  packed: boolean;
  id: number;
}

const TravelList = () => {
  
  const [travelList, setTravelList] = useState<TravelItem[]>([])
  const fetchAndSetTravelList = async() => {
    try{
      const response = await axios.get('http://localhost:5000/checklist')
      console.log(response.data.checklist)
      setTravelList(response.data.checklist)
    }
    catch(error){
      console.error('Error fetching travel list: ', error)
    }
  }

  useEffect(() => { fetchAndSetTravelList() }, [])

  const handleClearList = async () => {
    const originalTravelList = [...travelList]
    setTravelList([])

    try{
      const response = await axios.delete('http://localhost:5000/checklist/delete-all')
      console.log(response)
      fetchAndSetTravelList()
    }
    catch(error){
      console.error('Error Adding item in travel list: ', error)
      setTravelList(originalTravelList)
    }
  }

  const handleAddTravelItem = async (item: TravelItem) => {

    const originalTravelList = [...travelList]
    setTravelList((items) => [...items, item])

    try{
      const response = await axios.post('http://localhost:5000/checklist',
      {
        itemDescription: item.itemDescription,
        quantity: item.quantity,
        packed: item.packed
      })
      console.log(response)
      fetchAndSetTravelList()
    }
    catch(error){
      console.error('Error Adding item in travel list: ', error)
      setTravelList(originalTravelList)
    }
  }

  const handleDeleteItem = async(id: number) => {
    const originalTravelList = [...travelList]
    setTravelList( (list) => list.filter((item) => item.id !== id))


    try{
      const response = await axios.delete(`http://localhost:5000/checklist/${id}`)
      console.log(response)
      fetchAndSetTravelList()
    }
    catch(error){
      console.error('Error Deleteing item in travel list: ', error)
      setTravelList(originalTravelList)
    }

  }

  const handleToggleItem = async (id: number) => {
    
    const originalTravelList = [...travelList] 
    console.log(originalTravelList)
    console.log(id)
    setTravelList( (list) => list.map((item) => {
      if(item.id === id){
        
        return {...item, packed: !item.packed}
      }
      return item
     }))

     try{
      const response = await axios.put(`http://localhost:5000/checklist/${id}`)
      console.log(response)
      fetchAndSetTravelList()
     }
     catch(error){
      console.error('Error updating toggle item in travel list: ', error)
      setTravelList(originalTravelList)
    }
  }


  return (
    <StyledContainer>
      <TravelListHeader />
      <TravelListBody 
        onAddTravelItem={handleAddTravelItem}
        travelList={travelList}
        onDelete={handleDeleteItem}
        onToggle={handleToggleItem}
        onClearList={handleClearList}
      />
      <TravelListFooter travelList={travelList}/>
    </StyledContainer>
  );
}

export default TravelList;
