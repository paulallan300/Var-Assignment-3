export default function Y(props){
    
    function Sums(){
        var a=parseInt(props.a)
        var b=parseInt(props.b)
        var c=parseInt(props.c)
        return(a+b+c);
    }
    
    
    
    return(
        <p> Value is {props.a}+{props.b}+{props.c} is {Sums()}</p>
    );
}
