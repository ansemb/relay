graphql`
  fragment User_dataFragment on User {
    lastName
    ...UserText_dataFragment
  }
`;
