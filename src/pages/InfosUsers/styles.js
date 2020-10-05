
import styled from 'styled-components';

export const Container = styled.div`
  
    width:100vw;
    height:50vh;
    margin-top: 80px;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    .main{
        background-color:white;
        width:50%;
        padding:20px;

        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
    }

    .inputs{
        width:50%;
        .double_input{
            width:100%;
            display:flex;
            justify-content:space-between;
            
            .input_name{
                width:75%;
            }

            .input_phone{
                width:20%;
            }
        }
        
    input{
        width:98%;
        height: 20px;
        margin-top:10px;
        border:none;
        padding:5px;
        border-radius: 5px;
        background-color:#cfced1;
        outline:none;
    }

    .div_button{
        width:100%;
        margin-top: 10px;
        display:flex;
        align-items:center;
        justify-content:space-between;

        a{
            text-decoration:none;
            button{
                margin-top: 10px;
                width:150px;
                height: 50px;
                background-color: #F14E23;
                color:white;
                border-radius:10px;
                font-weight:bold;
                transition:0.3s;
                    
                padding:5px;

            }

            button:hover{
                background-color: #1C2D50;

            }
        }
        
        .div_selection{
            display:flex;
        }
    }
`;