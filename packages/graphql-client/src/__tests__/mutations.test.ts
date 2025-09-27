import {
  CREATE_POST_MUTATION,
  REACT_MUTATION,
  UNREACT_MUTATION,
  ADD_NOTE_MUTATION,
  DELETE_NOTE_MUTATION,
  SET_NICKNAME_MUTATION,
} from '../mutations';

describe('GraphQL Mutations', () => {
  it('CREATE_POST_MUTATIONが正しく定義されていること', () => {
    expect(CREATE_POST_MUTATION).toBeDefined();
    expect(CREATE_POST_MUTATION.kind).toBe('Document');
  });

  it('REACT_MUTATIONが正しく定義されていること', () => {
    expect(REACT_MUTATION).toBeDefined();
    expect(REACT_MUTATION.kind).toBe('Document');
  });

  it('UNREACT_MUTATIONが正しく定義されていること', () => {
    expect(UNREACT_MUTATION).toBeDefined();
    expect(UNREACT_MUTATION.kind).toBe('Document');
  });

  it('ADD_NOTE_MUTATIONが正しく定義されていること', () => {
    expect(ADD_NOTE_MUTATION).toBeDefined();
    expect(ADD_NOTE_MUTATION.kind).toBe('Document');
  });

  it('DELETE_NOTE_MUTATIONが正しく定義されていること', () => {
    expect(DELETE_NOTE_MUTATION).toBeDefined();
    expect(DELETE_NOTE_MUTATION.kind).toBe('Document');
  });

  it('SET_NICKNAME_MUTATIONが正しく定義されていること', () => {
    expect(SET_NICKNAME_MUTATION).toBeDefined();
    expect(SET_NICKNAME_MUTATION.kind).toBe('Document');
  });

  it('全てのミューテーションがGraphQL DocumentNodeであること', () => {
    const mutations = [
      CREATE_POST_MUTATION,
      REACT_MUTATION,
      UNREACT_MUTATION,
      ADD_NOTE_MUTATION,
      DELETE_NOTE_MUTATION,
      SET_NICKNAME_MUTATION,
    ];

    mutations.forEach((mutation) => {
      expect(mutation.kind).toBe('Document');
      expect(mutation.definitions).toBeDefined();
      expect(mutation.definitions.length).toBeGreaterThan(0);
    });
  });
});
