// styles.js
import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #f9f9f9;
  min-height: 100vh;
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  &:focus {
    border-color: #555;
  }
`;

export const TextArea = styled.textarea`
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  &:focus {
    border-color: #555;
  }
`;

export const SubmitButton = styled.button`
  padding: 15px;
  border: none;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #555;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const InfoItem = styled.p`
  margin: 5px 0;
`;

export const InfoLink = styled.a`
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: #0056b3;
  }
`;
