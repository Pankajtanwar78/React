import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
  useReactTable,
  ColumnFiltersState,
  VisibilityState,
} from "@tanstack/react-table";

import {
  Table,
  TableHead,
  TableBody,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { useMemo, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";
import { DataTablePagination } from "./DataTablePagination";
import { DataTableViewOptions } from "./DataTableViewOptions";

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const DataTable = <TData extends { position: string }, TValue>({columns, data}: DataTableProps<TData, TValue>) => {

  const [sorting, setSorting] = useState<SortingState>([{ id: 'position', desc: false }])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [teamFilter, setTeamFilter] = useState<string>("All");

  
  const filteredData = useMemo(() => {
    return teamFilter === "All" ? data : data.filter((row) => row.team.includes(teamFilter));
  }, [teamFilter, data]);

  // Function to determine row background color based on team
  const getRowBackgroundColor = (position: string) => {
    switch (position) {
      case 'Head':
        return 'bg-blue-100'; // Light blue for Team 1
      case 'Senior Manager':
        return 'bg-green-100'; // Light green for Team 2
      case 'Manager':
        return 'bg-yellow-100'; // Light yellow for Team 3
      case 'Team Lead':
        return 'bg-red-100'; // Light red for Team 4
        case 'Software Developer':
          return 'bg-brown-100'; // Light red for Team 4
      default:
        return ''; // Default background
    }
  };

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 20,
      },
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    

    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    },
  })

  // Handle team filter change
  const handleTeamFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTeamFilter(event.target.value);
    setSorting([{ id: 'position', desc: false }]);
  };


  return (
    <>
    <div className="rounded-md border">
    <div>
      <label htmlFor="team-filter">Filter by Team:</label>
      <select
        id="team-filter"
        value={teamFilter}
        onChange={handleTeamFilterChange}
      >
        <option value="All">All</option>
        <option value="Team1">Team1</option>
        <option value="Team2">Team2</option>
        <option value="Team3">Team3</option>
        <option value="Team4">Team4</option>
      </select>
    </div>
      <div>
        <input 
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string)}
          onChange={(event) => table.getColumn("email")?.setFilterValue(event.target.value)}
        />
      </div>
      <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <div style={{ maxHeight: "400px", overflow: "auto"}}>
      <Table style={{ width: "100%" }}>
        <TableHeader>
          {
            table.getHeaderGroups().map((headerGroup) => {
              return (
                <TableRow key={headerGroup.id}>
                  {
                    headerGroup.headers.map((header) => {
                      return (
                        <TableHead style={{
                          position: "sticky",
                          top: 0,
                          backgroundColor: "white",
                          zIndex: 20,
                        }}
                        key={header.id} >
                          {
                            header.isPlaceholder ? 
                              null :
                              flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )
                          }
                        </TableHead>
                      )
                    })
                  }

                </TableRow>
              )
            })
          }
        </TableHeader>
        <TableBody>
          {
            table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => {
                const position = row.original.position;
                return (
                  <TableRow 
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                    className={getRowBackgroundColor(position)}

                  >
                    {
                      row.getVisibleCells().map((cell) => {
                        return (
                          <TableCell key={cell.id}>
                            {
                              flexRender(cell.column.columnDef.cell,
                                cell.getContext()
                              )
                            }
                          </TableCell>
                        )
                      })
                    }
                    
                  </TableRow>
                )
              })) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No Results.
                  </TableCell>
                </TableRow>
              )

          }
        </TableBody>
      </Table>
      </div>
    </div>
    <DataTablePagination table={table} />
    <DataTableViewOptions table={table} />
    {/* <div>
          <button
            style={{
              marginRight: '10px'
            }}
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >First page
          </button>
          <button
            style={{
              marginRight: '10px'
            }}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >Previous page
          </button>
          <span>
            Page <b>{table.getState().pagination.pageIndex + 1}</b> of {table.getPageCount()}
          </span>
          <button
            style={{
              marginLeft: '10px'
            }}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >Next page</button>
          <button
            style={{
              marginLeft: '10px'
            }}
            onClick={() => table.lastPage()}
            disabled={!table.getCanPreviousPage()}
          >Last page
          </button>
    </div> */}
    {/* <div className="flex-1 text-sm text-muted-foreground">
      {table.getFilteredSelectedRowModel().rows.length} of{" "}
      {table.getFilteredRowModel().rows.length} row(s) selected.
    </div> */}
    </>
  )
}

export default DataTable