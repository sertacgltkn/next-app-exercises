import Error from 'next/error';

function ErrorPage () {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  
    return (
      <Error statusCode={this.props.statusCode} />
    );
  


export default ErrorPage;