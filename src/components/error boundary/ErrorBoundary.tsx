// import React from 'react';

// class ErrorBoundary extends React.Component {
//   constructor(props: any) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   logErrorToMyService(error: any, errorInfo: any) {
//     console.log('log error :' + error + errorInfo);
//   }
//   static getDerivedStateFromError(error: any) {
//     return { hasError: true };
//   }

//   componentDidCatch(error: any, errorInfo: any) {
//     logErrorToMyService(error, errorInfo);
//   }
//   render() {
//     if (this.state.hasError) {
//       return <h1>Something went wrong.</h1>;
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;
