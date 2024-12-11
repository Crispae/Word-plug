import React, { useEffect,useState } from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  TableCellLayout,
  PresenceBadgeStatus,
  Avatar,
} from "@fluentui/react-components";

const AnonymizeAuthor = () => {
  const [Authors,setAuthors] = useState([]);
  const [tableData, setTableData] = useState([]);



  const columns = [
    {columnKey: "authorName", label: "Author Name"},
    {columnKey: "AnonName", label: "Anonymized Name"},
  ]
  
  useEffect(() => {
   ListComments();
  
  }, []);

  async function ListComments() {
    try {
      await Word.run(async (context) => {

        const comments = context.document.body.getComments()

        comments.load({
          authorName: true,
          authorEmail: true,
          content: true,
        }); 

        await context.sync(); // Synchronize to get the loaded data

        // Now you can work with the loaded comments
        console.log("Comments:", comments.items);

        const newAuthors = []
        comments.items.forEach((comment) =>{
          newAuthors.push(comment.authorName)
        })


          setAuthors((prevAuthors) => [...prevAuthors, ...newAuthors]);

        

      });
    } catch (error) {
      console.error("Error loading comments:", error);
    }
  }


  useEffect(()=>{

    const uniqueAuthors = [...new Set(Authors)];

    const items = uniqueAuthors.map((author,index) =>{
      
      return {
        authorName: author,
        AnonName: index+1,}

    })


    setTableData( (previousItems) => [...previousItems, ...items])

  
  },[Authors])






  return <div>
    <div> <span style={{ fontWeight: "bold" }}>Anonymize the Author.</span></div>

    {/** Dive to show the name of authos in table */}
    <div>

      <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) =>{
            return <TableHeaderCell key={column.columnKey}><span style={{ fontWeight: "bold" }}>{column.label}</span></TableHeaderCell>
          })}
        </TableRow>
      </TableHeader>

        <TableBody>

          {tableData.map((item,index)=>{
            return <TableRow key={index}>

              <TableCell>
                <TableCellLayout
                media={

                  <Avatar
                  name={item.authorName}
                  color="blue"
                />
                }>{item.authorName}
                </TableCellLayout>
              </TableCell>

              <TableCell style={{alignItems:"center"}}>{item.AnonName}</TableCell>
            </TableRow>
          })}

        </TableBody>

      </Table>
    
    
    </div>


  </div>





};

export default AnonymizeAuthor;
