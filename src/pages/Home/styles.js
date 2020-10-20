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
   
    .box_text{
        margin: 10px 60px;

        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        p{
            margin:5px;
        }

    }

    .iframe{
        width:660px;
        height:400px;
    }

    
   .button{
       margin-top: 10px;
       img{
           width: 300px;

           &:hover{
               transform:scale(1.06);
               transition: 0.3s;
           }
       }
       
   }

 

`;