
import React,{Component} from 'react';
import axios from "axios";
import Add from "../RabitMq/Add"

export class home extends Component{
    componentDidMount() {
        const config={
            headers:{
                Authorization:'Bearer'+localStorage.getItem('token')
            }
        }
        axios.get('user',config).then(
            res=>{
                console.log(res);
            },
            err=>{
                console.log(err);
            }
        )
    }
    render() {

        return (
            <div className={"section2"}>
                <div className={"add"}>
                    <word>
                       {/*<Add/>*/}
                    </word>
                </div>
                <div className={"rec"}>
                    Polecane
                </div>
                <div className={"best"}>
                    Najlepsze Audiobooki
                </div>
            </div>

        );
    }
}

export default home;
