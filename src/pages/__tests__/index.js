import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery } from "gatsby"
import Index from "../index"

describe("Index component", () => {
  beforeEach(() => {
    useStaticQuery.mockReturnValue({
      allStrapiPost: {
        nodes: {
          id: `1`,
          content: `esto es parte de la descripcion`,
          url: `estaes prueba del cuerpo`,
          
        },
      },
    })
  })
  it("renders the tests correctly", async () => {
  
    const mockData = {
      allStrapiPost: {
        nodes: {
          id: "1",
          content: "prueba del content",
          url: "bla bla"
        }
      }
    }

    const { getByTestId } = render(
      <Index data={mockData} />
    )

    const { nodes } = mockData.allStrapiPost
    const post1 = "first-slug-link"
    const post2 = "second-slug-desc"

    expect(getByTestId(post1)).toHaveTextContent(nodes[0].frontmatter.title)
    expect(getByTestId(post2)).toHaveTextContent(
      nodes[1].frontmatter.description
    )
    expect(nodes.length).toEqual(2)
  })
})