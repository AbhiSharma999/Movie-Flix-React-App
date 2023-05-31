import React from "react";
import styled from "styled-components";

const Nav = styled.div`
height:70px;
background: radial-gradient(circle, rgba(63,136,251,1) 0%, rgba(201,70,252,1) 100%);
display:flex; 
justify-content:space-between;
align-items: center;
position: relative;
`

const Title = styled.div`
font-size: 30px;
color: #fff;
font-weight: 600;
font-family: Montserrat, sans-serif;
text-transform: uppercase;
margin-left: 20px;
&:hover{color:rgb(105, 50, 168)};
`
const CartContainer = styled.div`
position: relative;
cursor: pointer;
`

const CartIcon = styled.img`
height: 48px;
margin-right: 20px;
`

const CartCount = styled.span`
background-color: ${(props) => props.color};
border-radius: 50%;
padding: 4px 8px;
position: absolute;
right: 10px;
top: -5px;
font-size: 12px;
visibility: ${(props) => props.show? "visible": "hidden"};
`

class Navbar extends React.Component {
    render() {
        const {cartCount} = this.props;
        return(
            <>
            <Nav>
                <Title>
                    Movie Flix App
                </Title>
                <CartContainer>
                    <CartIcon src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="Cart icon" />
                    <CartCount color="yellow" show={true}> {cartCount} </CartCount>
                </CartContainer>
            </Nav>
            </>
        )
    }
}

export default Navbar;


//  Local SCOPE CSS styling

// const styles = {
//     nav: { 
//         height:70, 
//         background:"#4267b2", 
//         display:"flex", 
//         justifyContent:"space-between",
//         alignItems: "center",
//         position: "relative"
//     },

//     title: {
//         fontSize: 30,
//         color: "#fff",
//         fontWeight: 600,
//         fontFamily: '"Montserrat", sans-serif',
//         textTransform: "uppercase",
//         marginLeft: 20
//     },

//     cartContainer: {
//         position: "relative",
//         cursor: "pointer"
//     },

//     cartIcon: {
//         height: 48,
//         marginRight: 20,
//     },

//     cartCount: {
//         background: "orange",
//         borderRadius: "50%",
//         padding: "4px 8px",
//         position: "absolute",
//         right: 10,
//         top: -5,
//         fontSize: 12
//     }
// }