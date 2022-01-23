export default function X(props){
    
    function Sums(){
        var a=parseInt(props.a)
        var b=parseInt(props.b)
        
        return(a+b);
    }
    return(
        <p> Value is {props.a}+{props.b} is {Sums()}</p>
    );
    } 
