import styled from '@emotion/styled';

export const StyledModal = styled.div`
  background: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 24px;

  .modal {
    &__button {
      align-self: flex-end;

      &--grouped {
        column-gap: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }

    &__error {
      align-self: flex-end;
      color: #fb6c6c;
      font-size: 10px;
      margin-bottom: 16px;
    }

    &__input {
      border: 1px solid #a1a2a6;
      border-radius: 5px;
      margin-bottom: 10px;
      padding: 12px;

      &::placeholder {
        color: #c4c4c4;
      }
    }

    &__title {
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 16px;

      span {
        font-weight: 500;
      }
    }
  }
`