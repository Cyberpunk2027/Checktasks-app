import Paper from "@mui/material/Paper"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const Footer = () => {
    return (
        <Paper sx={{ width: '100%',
    bottom: 0,
    }} component="footer" square variant="outlined">
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my:1
          }}>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" >
            Copyright ©2022. Made by Ilia Abdelaui
          </Typography>
        </Box>
      </Container>
    </Paper>
    )
}

export default Footer