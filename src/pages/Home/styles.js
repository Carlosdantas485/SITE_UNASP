import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   margin-top:80px;

   display: flex;
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
   

   .iframe{
       width:560px;
       height:300px;
   }

   .button{
        button{
            margin-top: 30px;
            margin-top: 10px;
            width:150px;
            height: 50px;
            background-color: #F14E23;
            color:white;
            border-radius:10px;
            font-weight:bold;
            transition:0.3s;
        }
        button:hover{
            background-color: #1C2D50;

        }
       
   }

 

`;