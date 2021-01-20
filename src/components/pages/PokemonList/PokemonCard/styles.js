import styled from '@emotion/styled';

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
      height: 100%;
    }

    &__avatar {
      height: 50px;
    }

    &__name {
      color: #1e2732;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 4px;
      text-decoration: none;

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
      font-size: 10px;
      font-weight: 500;
      justify-content: center;
      margin: 9px 9px 0 0;
      padding: 8px 12px;
    }

    &__types {
      display: flex;
      flex-wrap: wrap;
    }
  }
`