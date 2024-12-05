import { ColumnDef } from "@tanstack/react-table";
import {  ArrowUpDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { DataTableColumnHeader } from "./DataTableColumnHeader";
export type Student = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  university: string;
  amount: number;
  team: string[];
  position: string;
};

const positionSortOrder = ["Head", "Senior Manager", "Manager", "Team Lead", "Software Developer"];


export const columns: ColumnDef<Student>[] = [
  {
    id: 'select',
    header: ({table}) => <input 
      type="checkbox"
      checked={table.getIsAllPageRowsSelected()}
      onChange={(event) => table.toggleAllPageRowsSelected(event.target.checked)}
      aria-label="Select all"
    />,
    cell: ({row}) => <input 
      type="checkbox"
      checked={row.getIsSelected()}
      onChange={(event) => row.toggleSelected(event.target.checked)}
      aria-label="Select"
    />,
    enableHiding: false,
    enableSorting: false
  },
  {
    accessorKey: "id",
    header: () => <div className="text-left">ID</div>,
    cell: ({row}) => {
      const id = row.getValue('id') as number
      return <div className="text-left">{id}</div>
    },
    enableHiding: false
  },
  {
    accessorKey: "first_name",
    header: ({column}) => 
      <div className="text-left" >
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >First Name
        <ArrowUpDown style={{display: 'inline-block'}}></ArrowUpDown>
        </button>
        
      </div>,
    cell: ({row}) => {
      const firstName = row.getValue('first_name') as string
      return <div className="text-left">{firstName}</div>
    },
    enableHiding: false
  },
  {
    accessorKey: "last_name",
    header: () => <div className="text-left">Last Name</div>,
    cell: ({row}) => {
      const lastName = row.getValue('last_name') as string
      return <div className="text-left">{lastName}</div>
    }
  },
  {
    accessorKey: "email",
    header: () => <div className="text-left">Email</div>,
    cell: ({row}) => {
      const email = row.getValue('email') as string
      return <div className="text-left">{email}</div>
    },
  },
  {
    accessorKey: "gender",
    header: () => <div className="text-left">Gender</div>,
    cell: ({row}) => {
      const gender = row.getValue('gender') as string
      return <div className="text-left">{gender}</div>
    }
  },
  {
    accessorKey: "university",
    header: ({column}) => <DataTableColumnHeader column={column} title="University" ></DataTableColumnHeader>,
    cell: ({row}) => {
      const univ = row.getValue('university') as string
      return <div className="text-left">{univ}</div>
    }
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-left">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    id: 'actions',
    cell: ({row}) => {
      const student = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>
              <span>Clipboards</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {/* <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(student.id.toString())}
            >
              
            </DropdownMenuItem> */}
            <DropdownMenuSeparator/>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(student.first_name)}
            >copy first name</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(student.university)}
            >copy University</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  },
  {
    accessorKey: "team",
    header: () => <div className="text-left">Team Name</div>,
    cell: ({row}) => {
      const teamName = row.getValue('team') as string[]
      return teamName.map((team, index) => <div key={index} className="text-left">{team}</div>)
    }
  },
  {
    accessorKey: "position",
    header: ({column}) => <div className="text-left" >
    <button
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >First Name
    <ArrowUpDown style={{display: 'inline-block'}}></ArrowUpDown>
    </button>
    
  </div>,
    cell: ({ row }) => {
      const positionName = row.getValue("position") as string;
      return <div className="text-left">{positionName}</div>;
    },
    sortingFn: (rowA, rowB) => {
      const positionA = rowA.getValue('position') as string;
      const positionB = rowB.getValue('position') as string;
      console.log(`Comparing: ${positionA} with ${positionB}`);
      return positionSortOrder.indexOf(positionA) - positionSortOrder.indexOf(positionB);
    }
  }
];
