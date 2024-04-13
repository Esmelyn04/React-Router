import { Form, useLoaderData } from "react-router-dom";
import { getContact } from "../contacts";

export async function loader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}

export default function Contact() {
  const { contact } = useLoaderData();
  // const contact = {
  //   first: "Your",
  //   last: "Name",
  //   avatar: "data:image/png;base64,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",
  //   twitter: "your_handle",
  //   notes: "Some notes",
  //   favorite: true,
  // };

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || null}
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}