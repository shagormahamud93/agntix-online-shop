
interface ErrorMsgProps {
  error: string | undefined;
}

const ErrorMsg = ({error}: ErrorMsgProps) => {
  return (
     <p style={{color:'red'}}>{error}</p> 
  );
};

export default ErrorMsg;