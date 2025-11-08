import React from "react";
import styled from "styled-components";
import BurgerImg from "../img/burger.jpeg";
import ChickenImg from "../img/chicken.jpg";
import PotatoImg from "../img/potato.webp";
import TomatoImg from "../img/tomato.webp";

export const List = () => {
    const listItems = [
        {
            img: BurgerImg,
            name: "Smoked salmon burger",
            types: [
                {
                    time: "20",
                    servings: "6",
                    calories: "210"
                },
                {
                    time: "40",
                    servings: "12",
                    calories: "420"
                },
                {
                    time: "55",
                    servings: "18",
                    calories: "620"
                }
            ]
        },
        {
            img: TomatoImg,
            name: "Tomatoes With Creamy Feta",
            types: [
                {
                    time: "15",
                    servings: "3",
                    calories: "600"
                },
                {
                    time: "30",
                    servings: "6",
                    calories: "1200"
                },
                {
                    time: "45",
                    servings: "9",
                    calories: "1800"
                }
            ]
        },
        {
            img: PotatoImg,
            name: "Spicy potato salad",
            types: [
                {
                    time: "15",
                    servings: "1",
                    calories: "160"
                },
                {
                    time: "30",
                    servings: "2",
                    calories: "320"
                },
                {
                    time: "45",
                    servings: "3",
                    calories: "480"
                }
            ]
        },
        {
            img: ChickenImg,
            name: "Chicken Biryani",
            types: [
                {
                    time: "10",
                    servings: "2",
                    calories: "240"
                },
                {
                    time: "25",
                    servings: "3",
                    calories: "480"
                },
                {
                    time: "40",
                    servings: "4",
                    calories: "720"
                }
            ]
        }
    ]
    const [number, setNumber] = React.useState(0);
    return (
    <ListWrapper className="list">
      {listItems.map(item => {
        

        return (
          <ListItem>
            <FoodImage src={item.img} alt={item.name} />
            <FoodName>{item.name}</FoodName>

            <InfoList>
              <InfoListItem>{item.types[number].time} min</InfoListItem>
              <InfoListItem>{item.types[number].servings} servings</InfoListItem>
              <InfoListItem>{item.types[number].calories} calories</InfoListItem>
            </InfoList>

            <DifficultyWrapper>
              <DifficultyButtons>
                <li>
                  <DifficultyButton type="button" onClick={() => setNumber(0)}>Easy</DifficultyButton>
                </li>
                <li>
                  <DifficultyButton type="button" onClick={() => setNumber(1)}>Medium</DifficultyButton>
                </li>
                <li>
                  <DifficultyButton type="button" onClick={() => setNumber(2)}>Hard</DifficultyButton>
                </li>
              </DifficultyButtons>
            </DifficultyWrapper>
          </ListItem>
        );
      })}
    </ListWrapper>
    )
}

const ListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  gap: 250px;
  list-style: none;
    background: #fff8f0;
  padding: 0;
`;

const ListItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  padding: 16px;
  width: 250px;
  text-align: center;
`;

const FoodImage = styled.img`
  border-radius: 16px;
  width: 400px;
`;

const FoodName = styled.h3`
  font-size: 18px;
  margin: 12px 0;
`;

const InfoList = styled.ul`
  display: flex;
  list-style: none;
    justify-content: center;
      border: none;
  background-color: white;
  border-radius: 20px;
  gap: 20px;
    padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
  margin: 8px 0;
`;


const InfoListItem = styled.li`
  margin-bottom: 4px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const DifficultyWrapper = styled.div`
  margin-top: 12px;
`;

const DifficultyButtons = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  border: none;
  background-color: white;
  border-radius: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  gap: 8px;
`;

const DifficultyButton = styled.button`
  padding-top: 14px;
  padding-bottom: 14px;
  padding-right: 8px;
  padding-left: 8px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  background: #fff8f0;
  transition: background 0.2s ease;
  color: black;

    &:hover {
    background: #ff3737ff;
    color: white;
  }
`;