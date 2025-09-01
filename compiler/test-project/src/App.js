/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

graphql`
  query AppQuery($includeUserBody: Boolean!) {
    node(id: "test") {
      ...Component_node
      ...User_dataFragment @include(if: $includeUserBody)
    }
  }
`;
