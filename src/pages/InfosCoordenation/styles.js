
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

                img{
                    width: 300px;

                    &:hover{
                        transition: 0.3s;
                        transform:scale(1.06);
                    }
                }


            }            
        }
        .div_cupom{
            background-color: #1C2D50;
            color:white;
            padding:15px;
            display:flex;
            flex-direction:column;
            align-items:center;

            

            .div_code{
                width:200px;
                height: 50px;
                background-color: white;
                color: red;
                font-size: 25px;
                font-weight:bold;
                margin:15px;

                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;

                animation: pulse 0.7s infinite;
                margin: 0 auto;
                margin-top: 10px;
                margin-bottom: 20px;
                animation-direction: alternate;
                -webkit-animation-name: pulse;
                animation-name: pulse;
                

                @-webkit-keyframes pulse {
                    0% {
                        -webkit-transform: scale(1);
                        -webkit-filter: brightness(100%);
                    }
                    100% {
                        -webkit-transform: scale(1.1);
                        -webkit-filter: brightness(200%);
                    }
                }

                @keyframes pulse {
                    0% {
                        transform: scale(1);
                        filter: brightness(100%);
                    }
                    100% {
                        transform: scale(1.1);
                        filter: brightness(200%);
                    }
                }



                
            }
        }
    }


`;