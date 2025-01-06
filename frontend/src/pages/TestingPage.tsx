import React from "react";
import IconInput from "../components/ui/IconInput";
import { User } from "lucide-react";
import Input from "../components/ui/Input";
import Avatar from "../components/ui/Avatar";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import Box from "../components/ui/Box";
import Icon from "../components/ui/Icon";
import Button from "../components/ui/Button";
import Loader from "../components/loaders/Loader";
import Badge from "../components/ui/Badge";

const TestingPage = () => {
  return (
    <Container variant="section" className="p-4 border">
      <Heading variant="h1" className="mb-4 text-2xl font-black text-center">
        Testing Components
      </Heading>
      <div className="max-w-2xl mx-auto space-y-2">
        <div className="flex items-center justify-center">
          <Avatar
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="avatar"
            className="w-14"
          />
        </div>
        <IconInput
          type="text"
          placeholder="Username"
          icon={User}
          className="text-sm rounded-sm input-bordered h-9"
          iconClassName="text-error"
        />
        <Input
          className="w-full text-sm rounded-sm h-9 input-bordered"
          placeholder="Email"
        />
        <Box className="flex items-center justify-between">
          <Heading variant="h4" className="text-sm">
            Change Password
          </Heading>
          <Icon icon={User} />
        </Box>
        <Button btnText="Save Changes" className="w-full h-0 btn-success">
          <Icon icon={User} />
          <Loader
            loaderSize="loading-xs"
            loaderVariant="loading-spinner"
            loaderColor="text-primary"
          />
        </Button>
        <Badge className="badge-primary">Featured</Badge>
      </div>
    </Container>
  );
};

export default TestingPage;
