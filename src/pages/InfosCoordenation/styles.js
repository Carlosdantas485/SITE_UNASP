
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

        .div_box{
            width: 100%;
            display:flex;
            align-items:center;
            justify-content:space-around;

            .div_image{
                border-radius:50%;
                border: 5px solid grey;
            }

            .div_infos{
                display:flex;
                flex-direction:column;
                align-items:center;

                table{
                    width:250px;
                    text-align:center;
                    padding:5px;
                    border-radius:10px;
                    tr{
                        td{
                            border:1px solid grey;
                        }
                    }

                }

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
                    justify-content:space-between;
                    padding:5px;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                }

                button:hover{
                    background-color: #1C2D50;

                
                }
            }            
        }
        .div_cupom{
            margin-top:30px;
            background-color: #1C2D50;
            color:white;
            padding:10px;
            display:flex;
            flex-direction:column;
            align-items:center;
            border: 2px dashed white;

            .div_code{
                width:200px;
                height: 50px;
                background-color: white;
                color: red;
                font-size: 20px;
                font-weight:bold;
                margin:10px;

                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
            }
        }
    }


`;