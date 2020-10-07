
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
        justify-content:center;
        flex-wrap:wrap;

        .button{
            width:250px;
            display:flex;
            justify-content:center;
            margin:5px;
            
            &:hover{
                transition: 0.3s;
                transform: scale(1.06)

            }

           
            img{
                width:100%;
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