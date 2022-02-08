import React from "react";


function Links({github, linkedin}) {
  return (
    <>
      <h3>Links</h3>
      {<a href={github}>GitHub</a>},{<a href={linkedin}>LinkedIn</a>}
    </>
  );
}

export default Links;
