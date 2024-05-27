import { Box, Container, Flex, Heading, HStack, VStack, Text, Input, IconButton, Spacer, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Heading size="md">My Blog</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex mt={8}>
        {/* Blog Posts Section */}
        <Box flex="3" mr={8}>
          <VStack spacing={8} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 1</Heading>
              <Text mt={4}>This is a summary of the blog post content...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 2</Heading>
              <Text mt={4}>This is a summary of the blog post content...</Text>
            </Box>
            {/* Add more blog posts as needed */}
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1">
          <VStack spacing={8} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">Search</Heading>
              <Input placeholder="Search..." mt={2} />
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">Recent Posts</Heading>
              <Text mt={2}>Post 1</Text>
              <Text mt={2}>Post 2</Text>
              <Text mt={2}>Post 3</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">Categories</Heading>
              <Text mt={2}>Category 1</Text>
              <Text mt={2}>Category 2</Text>
              <Text mt={2}>Category 3</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Flex as="footer" bg="gray.800" color="white" p={4} mt={8} align="center" justify="space-between">
        <Text>&copy; 2023 My Blog. All rights reserved.</Text>
        <HStack spacing={4}>
          <Link href="#"><FaFacebook /></Link>
          <Link href="#"><FaTwitter /></Link>
          <Link href="#"><FaInstagram /></Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;