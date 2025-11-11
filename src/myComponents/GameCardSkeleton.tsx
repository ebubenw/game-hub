import { CardBody, CardRoot, Skeleton, SkeletonText } from "@chakra-ui/react";
import { Card } from "@chakra-ui/card";

function GameCardSkeleton() {
  return (
    <CardRoot borderRadius={10} width="300px">
      <Card>
        <Skeleton height="20px"></Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    </CardRoot>
  );
}

export default GameCardSkeleton;
