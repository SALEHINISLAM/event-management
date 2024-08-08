import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ServiceCard = ({ service, index }) => {
  const { img, title, price, short_description } = service;
  return (
    <Card className="mt-6 h-full w-full">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={`${img}`} alt={title} className="h-full w-full" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <div className="font-semibold text-xl">
          <h3>
            Price:
            <span>{price}</span>
          </h3>
        </div>
        <Typography>
          {short_description.length > 150
            ? short_description.slice(0, 150) + "..."
            : short_description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>
          <Link to={`/servicedetails/${index}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
  index: PropTypes.number,
};
export default ServiceCard;
