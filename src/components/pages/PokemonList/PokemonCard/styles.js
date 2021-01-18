import styled from '@emotion/styled'

export const StyledPokemonCard = styled.div`
  align-items: center;
  background: #fbfbfb;
  border-radius: 6px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  height: 73px;
  justify-content: space-between;
  padding: 6px;

  .pokemon-card {
    &--left {
      align-items: flex-start;
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      margin-right: 16px;
      padding: 6px 0 6px 12px;
    }

    &--right {
      align-items: center;
      display: flex;
      flex: none;
    }

    &__avatar {
      height: 50px;
    }

    &__name {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 9px;

      span {
        color: #8792e2;
        font-size: 10px;
        margin-left: 12px;
      }
    }

    &__remove {
      align-self: flex-start;
      cursor: pointer;
      margin-left: 16px;
    }
    
    &__type {
      align-items: center;
      background: #4fc1a6;
      border-radius: 99px;
      color: #fff;
      display: flex;
      font-size: 8px;
      font-weight: 500;
      justify-content: center;
      margin-right: 9px;
      padding: 8px 12px;
    }

    &__types {
      display: flex;
      flex-wrap: wrap;
    }
  }
`