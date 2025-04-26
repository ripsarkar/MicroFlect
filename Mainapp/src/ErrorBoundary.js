import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorMessage: '' };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render shows the fallback UI
        return { hasError: true, errorMessage: error.message };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught by Error Boundary: ", error, errorInfo);
    }

    handleRetry = () => {
        this.setState({ hasError: false, errorMessage: '' });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Something went wrong while loading the module.</h1>
                    {/* <p>{this.state.errorMessage}</p> */}
                    {/* <button onClick={this.handleRetry}>Retry</button> */}
                </div>
            );
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;