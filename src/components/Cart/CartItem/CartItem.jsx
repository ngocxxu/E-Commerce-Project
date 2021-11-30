import React from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from "@material-ui/core";
import useStyles from "./styles";

const CartItem = ({ item, handleRemoveFromCart, handleUpdateCartQty }) => {
  const classes = useStyles();
  console.log("item", item);
  return (
    <Card>
      <CardMedia
        image={item.image?.url}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => {
              handleUpdateCartQty(item.id, item.quantity - 1);
            }}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => {
              handleUpdateCartQty(item.id, item.quantity + 1);
            }}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          color="secondary"
          type="button"
          onClick={() => {handleRemoveFromCart(item.id)}}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
