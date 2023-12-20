// mostly code from reactjs.org/docs/error-boundaries.html
import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          Энэ жагсаалтад алдаа гарлаа.<Link to="/">Энд дар</Link>{" "}
          нүүр хуудас руу буцах.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
