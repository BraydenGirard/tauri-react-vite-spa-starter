import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);


  let errorMessage = '';

  if (typeof error === 'object' && error !== null) {
    if ('statusText' in error && typeof error.statusText === 'string') { 
      errorMessage = error.statusText;
    } else if('message' in error && typeof error.message === 'string') { 
      errorMessage = error.message;
    } else {
      errorMessage = 'Unknown error';
    }

  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}