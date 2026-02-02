import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function TodoList() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }} >
        <CardContent
        >
          <Typography style={{display:"flex",justifyContent:"center",alignItems:"center"}} variant="h1">مهامي</Typography>
          <Divider style={{ marginBottom: "5px" }} />
          {/*filter buttons start */}
          <ToggleButtonGroup
            style={{ direction: "ltr", marginTop: "30px", display:"flex",justifyContent:"center",alignItems:"center"}}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="right">غير المنجز</ToggleButton>
            <ToggleButton value="center">المنجز</ToggleButton>
            <ToggleButton value="left">الكل</ToggleButton>
          </ToggleButtonGroup>
          {/*filter buttons end */}
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Container>
  );
}
