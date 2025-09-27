import { gql } from '@apollo/client';

// Create post mutation (認証必要)
export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      whatPerson
      thoughts
      emotions
      createdAt
      updatedAt
      reactionCount
      hasUserReacted
    }
  }
`;

// React mutation (認証必要)
export const REACT_MUTATION = gql`
  mutation React($input: ReactInput!) {
    react(input: $input) {
      id
      postId
      type
      createdAt
    }
  }
`;

// Unreact mutation (認証必要)
export const UNREACT_MUTATION = gql`
  mutation Unreact($input: ReactInput!) {
    unreact(input: $input)
  }
`;

// Add note mutation (認証必要)
export const ADD_NOTE_MUTATION = gql`
  mutation AddNote($input: AddNoteInput!) {
    addNote(input: $input) {
      id
      postId
      body
      createdAt
      post {
        id
        whatPerson
        thoughts
        emotions
        createdAt
        updatedAt
        reactionCount
        hasUserReacted
      }
    }
  }
`;

// Delete note mutation (認証必要)
export const DELETE_NOTE_MUTATION = gql`
  mutation DeleteNote($noteId: String!) {
    deleteNote(noteId: $noteId)
  }
`;

// Set nickname mutation (認証必要)
export const SET_NICKNAME_MUTATION = gql`
  mutation SetNickname($input: SetNicknameInput!) {
    setNickname(input: $input) {
      id
      nickname
      ordinal
      createdAt
    }
  }
`;
