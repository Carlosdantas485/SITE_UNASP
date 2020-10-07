
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
                width:65%;
            }

            .input_phone{
                margin-left: 10px;
                width:30%;
            }
        }
    }
    input{
        width:98%;
        height: 20px;
        margin-top:10px;
        border:none;
        padding:5px;
        background-color:#cfced1;
        outline:none;
        color:#fff;
        background: rgb(248,174,61);
        background: linear-gradient(14deg, rgba(248,174,61,1) 0%, rgba(233,80,28,1) 100%);

        ::-webkit-input-placeholder {
            color: white;
        }
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
                height: 35px;
                font-size: 15px;
                background: rgb(248,174,61);
                background: linear-gradient(14deg, rgba(248,174,61,1) 0%, rgba(233,80,28,1) 100%);
                color:white;
                border-radius:50px;
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