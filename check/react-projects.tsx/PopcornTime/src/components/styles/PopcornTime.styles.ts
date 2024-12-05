import styled from "styled-components";


export const StyledWeb = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: calc(100vh - 2*2.4rem);
`

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7.2rem;
  width: 100%;
  background-color: #6741d9;
  margin-bottom: 2.4rem;
  border-radius: 1rem;
  padding-left: 3.2rem;
  padding-right: 3.2rem;
  font-size: 18px;

  div{
    display: grid;
    grid-template-columns: auto 1fr;
    text-align: center;
    column-gap: 1rem;
  }

  span{
    font-size: 32px;
  }

  h2{
    align-self: center;
    color: #fff;
  }

  input {
    min-width: 22%;
    padding: 1.5rem 2rem;
    border-radius: 1rem;
    background-color: #7950f2;
    border: none;
    font-size: 18px;
    transition: all 0.3s ease;
    color: #dee2e6;
    margin-right: 6rem;
  }

  input::placeholder {
    color: #adb5bd;
  }

  input:focus {
    outline: none;
    box-shadow: 0 2.4rem 2.4rem rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`

export const StyledBody = styled.main`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  column-gap: 2rem;
  height: calc(100% - 7.2rem - 2.4rem);
`

export const StyledSearch = styled.div`
  width: 60rem;
  background-color: #2b3035;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`

export const StyledFavorite = styled.div`
  width: 60rem;
  background-color: #2b3035;
  height: 100%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: start;
  border-radius: 1rem;
  position: relative;

  
`

export const StyledLoading = styled.div`
  font-size: 25px;
`

export const StyledError = styled.div`
  font-size: 25px;
`

export const StyledMovies = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
  list-style-type: none;
  overflow: auto;
  height: 100%;
  width: 100%;
`

type StyledHideButtonProp = {
  hide: boolean;
}

export const StyledHideButton = styled.button<StyledHideButtonProp>`
  position: absolute;
  right: 0rem;
  top: 0rem;
  width: 4rem;
  height: 4rem;
  font-size: 18px;
  background-color: black;
  border-radius: 50%;
  border: none;
  color: white;
  margin-right: ${({hide}) => hide ? '1.6rem': '0rem'};
`

export const StyledMovie = styled.li`
  
  display: grid;
  grid-template-columns: 6rem 1fr;
  align-items: center;
  padding: 1.6rem 3.2rem;
  border-bottom: 1px solid grey;
  font-size: 1.6rem;
  column-gap: 3rem;
  grid-template-rows: auto auto;
  row-gap: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #343a40;
  }

  &:active {
    background-color: #2b4035;
  }

  img{
    width: 100%;
    height: 100%;
    grid-row: 1 / -1;
  }

  h2{
    font-size: 2rem;
  }

`

export const StyledYear = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  grid-column: 2 ;
  font-size: 2rem;

`

export const StyledFavoriteHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  column-gap: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  row-gap: 1rem;
  background-color: #343a40;
  font-size: 16px;
  h2{
    grid-column: 1 / -1;
  }
`

export const StyledFavoriteHeaderDivTypeA = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 1rem;
  align-items: center;
  justify-content: center;
  span{
    grid-row: span 2;
  }
  div{
    grid-column: 2;
  }
`

export const StyledFavoriteHeaderDivTypeB = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 1rem;
`

export const StyledFavorites = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
  overflow: auto;
  border-bottom: 1px solid grey;
  background-color: #2b3035;
`

export const StyledFavoriteMovie = styled.li`
  display: grid;
  padding: 1.6rem 3.2rem;
  grid-template-columns: 12rem 1fr;
  column-gap: 2rem;
  font-size: 16px;
  border-bottom: 1px solid grey;
  row-gap: 1rem;
  
  img{
    width: 100%;
    height: 100%;
  }

`

export const StyledFavoriteMovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: 100%;

  h2{
    margin-bottom: 4rem;
  }
`

export const StyledFavoriteDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  align-items: center;
`

export const StyledFavoriteDetailsContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  column-gap: 0.5rem;
  font-size: 20px;
`

export const StyledFavoriteButton = styled.div`
  background-color: red;
  text-align: center;
  padding: 0.5rem 1rem;
  margin-left: 4rem;
  border-radius: 50%;
  cursor: pointer;
`

export const StyledMovieDetailsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 30%;
  background-color: #343a40;
  column-gap: 3rem;
  img{
    height: 100%;
    width: 30%;
  }
`

export const StyledMovieDetailsHeaderDetails = styled.div`
  flex: 1;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  row-gap: 1rem;

  div{
    span{
      margin-right: 1rem;
    }
    p{
      display: inline-block;
    }
  }
`

export const StyledMovieDetailsBody = styled.div`
  height: 100%;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  justify-content: start;
  align-items: start;
  font-size: 16px;
  font-style: italic;

  div{
    padding: 0 2rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
    background-color: #343a40;
    border-radius: 1.5rem;
    width: 100%;
  }
`

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0;

`

type StarButtonProp = {
  val: 'on' | 'off';
}

export const StarButton = styled.button<StarButtonProp>`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  
  & > span {
    font-size: 4.2rem;
    transition: color 0.2s;
    color: ${({val}) => (val === 'on') ? 'gold': 'grey'};
  }
`

export const RatingValue = styled.div`
  font-size: 1.6rem;
`
export const StyledMovieDetailsBodyButton = styled.button`
  background-color: red;
  width: 100%;
  font-size: 16px;
  border: none;
  padding: 1rem;
  border-radius: 1.5rem;
  background-color: #6741d9;
  margin-bottom: 1rem;
`