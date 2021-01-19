import styled from '@emotion/styled';

export const PokemonDetailWrapper = styled.div`
  background: #ffcd4e;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  .pokemon-detail {
    &--bottom {
      background: #fff;
      border-radius: 46px 46px 0 0;
      flex: 1 1 auto;
      padding: 48px 24px 0 24px;
    }

    &--top {
      display: flex;
      flex: none;
      flex-direction: column;
      margin-bottom: -25px;
      padding: 24px 24px 0 24px;
    }

    &__avatar {
      align-items: center;
      align-self: center;
      background: #fde9a3;
      border-radius: 999px;
      display: flex;
      height: 220px;
      justify-content: center;
      max-height: 220px;
      max-width: 220px;
      width: 220px;

      img {
        height: 100%;
        z-index: 10;
      }
    }

    &__button {
      cursor: pointer;
      margin-top: 20px;
    }

    &__data {
      align-items: start;
      display: flex;
      flex: 1 1 0%;
      flex-direction: column;

      &--grouped {
        display: flex;
        justify-content: space-between;
      }

      &__label {
        color: #a1a2a6;
        font-size: 500;
        margin-bottom: 8px;
      }

      &__move {
        background: #8792e2;
      }

      &__move, &__type {
        align-items: center;
        border-radius: 99px;
        color: #fff;
        display: flex;
        font-size: 12px;
        font-weight: 500;
        justify-content: center;
        margin: 0 9px 9px 0;
        padding: 8px 12px;
      }

      &__moves, &__types {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 11px;
      }

      &__type {
        background: #4fc1a6;
      }

      &__value {
        margin-bottom: 20px;
      }
    }

    &__name {
      color: #fff;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 24px;
    }

    &__nav {
      align-self: flex-start;
    }
  }
`;