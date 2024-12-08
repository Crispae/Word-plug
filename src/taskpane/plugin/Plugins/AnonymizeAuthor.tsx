import React, { useEffect } from "react";

const AnonymizeAuthor = () => {
  useEffect(() => {
    ListComments();
  }, []);

  async function ListComments() {
    try {
      await Word.run(async (context) => {
        // Getting the comments from the document
        const comments = context.document.body.getComments()
        comments.load({
          authorName: true,
          authorEmail: true,
          content: true,
        }); // Load the required properties

        await context.sync(); // Synchronize to get the loaded data

        // Now you can work with the loaded comments
        console.log("Comments:", comments.items);
        comments.items.forEach((comment) => {
          console.log(comment.authorName, );
        });
      });
    } catch (error) {
      console.error("Error loading comments:", error);
    }
  }

  return <div>Anonymize the Author.</div>;
};

export default AnonymizeAuthor;
