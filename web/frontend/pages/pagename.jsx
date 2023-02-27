import { Card, Page, Layout, TextContainer, Heading } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function PageName() {
  return (
    <Page>
      <TitleBar
        title="Product Detail Info"
        primaryAction={{
          content: "Get info for all products",
          onAction: () => console.log("Primary action"),
        }}
        secondaryActions={[
          {
            content: "Choose Products",
            onAction: () => console.log("Secondary action"),
          },
        ]}
      />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Heading>Download</Heading>
            <TextContainer>
              <p>This is my new app</p>
            </TextContainer>
          </Card>
          <Card sectioned>
            <Heading>Create a Google Sheet</Heading>
            <TextContainer>
              <p>Body</p>
            </TextContainer>
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          <Card sectioned>
            <Heading>Heading</Heading>
            <TextContainer>
              <p>Body</p>
            </TextContainer>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
