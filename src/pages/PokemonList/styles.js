import styled from '@emotion/styled'

export const PokemonListWrapper = styled.div`
  padding: 24px;

  .pokemon-list {
    &__content {
      display: grid;
      row-gap: 20px;
    }

    &__count {
      font-size: 12px;
      margin-bottom: 16px;
      text-align: left;

      span {
        font-size: 20px;
        font-weight: 700;
      }
    }
    
    &__header {
      align-items: center;
      display: flex;
      margin-bottom: 14px;

      h1 {
        font-size: 18px;
        font-weight: 700;
      }

      img {
        margin-right: 16px;
      }
    }

    &__more {
      color: #c4c4c4;
      cursor: pointer;
    }

    &__tab {
      border-bottom: 2px solid #c4c4c4;
      cursor: pointer;
      flex: 1 1 auto;
      font-weight: 300;
      padding: 9px;
    }

    &__tabs {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;

      .active {
        border-bottom: 2px solid #8792e2;
        cursor: default;
        font-weight: 500;
      }
    }
  }
`;