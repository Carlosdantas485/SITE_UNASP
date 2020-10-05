
import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   margin-top:80px;

   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;

   .main{
       
        background-color:white;
        width:50%;
        padding:20px;
       
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
    }

   h1{
       font-weight:bold;
   }

    .OptionsList{
        width: 100%;
        display: flex;
        align-items:center;
        flex-wrap:wrap;


        .iframe{
            width:560px;
            height:300px;
        }

        .button{
            width:50%;
            display:flex;
            justify-content:center;
            text-decoration:none;

            button{
                    margin-top: 30px;
                    width:250px;
                    height: 50px;
                    background-color: #F14E23;
                    color:white;
                    border-radius:10px;
                    font-weight:bold;
                    transition:0.3s;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    padding:5px;
            }

            button:hover{
                background-color: #1C2D50;

            }
                    
            p{
                width:80%;
                text-align:center;
            }
            .image{
                width: 20%;
            }
        }
    }

`;