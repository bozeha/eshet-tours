import styled from "styled-components";


const Tour = ({ props }) => {

    const FixImageUrl = (badUrl) => {

        return badUrl.replace("{0}", "Maximal");
    }

    return (

        <TourStyled>
            <TourImage src={FixImageUrl(props.currentItem.Img)} />
            <TitleBlock>{props.currentItem.Title}</TitleBlock>
        </TourStyled>
    )
}


const TourStyled = styled.div`

    border:1px solid #c4c4c4;
    &:hover{
        border-color:black;
    }
    flex-grow:0;
    flex-basis:0;
    flex: 1 0 16%;
    
    height: 200px;
    padding:15px 10px 0px 10px;
    margin:0px 15px 15px 15px;
    
    @media only screen and (max-width: 768px) {
        display:flex;
        flex-direction:row;
        padding-right:0px;
        margin:10px;
    }

`;
const TourImage = styled.img`
object-fit: cover;
width:100%;
height:150px;
@media only screen and (max-width: 768px) {
        width:50%;
    }


`;

const TitleBlock = styled.p`
margin:0px;
padding:5px;
font-size:0.8rem;
text-overflow:ellipsis;
width:100%;
overflow:hidden;
height:35px;
@media only screen and (max-width: 768px) {
        width:50%;
    }

`



export default Tour;