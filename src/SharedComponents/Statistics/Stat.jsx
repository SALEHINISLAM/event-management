import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
  import PropTypes from "prop-types";
const  Stat=({stat})=> {
    return (
      <Card
        shadow={false}
        className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className={`absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center`}
          style={{backgroundImage:`url('${stat.img}')`, backgroundSize:'cover' ,height:'100%',width:'100%', backgroundRepeat:'no-repeat'}}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            {
                stat.count
            }
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
            {
                stat.title
            }
          </Typography>
        </CardBody>
      </Card>
    );
  }
  Stat.propTypes={
    stat: PropTypes.object,
  }
  export default Stat;