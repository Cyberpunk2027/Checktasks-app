import Paper from "@mui/material/Paper"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const Footer = () => {
    return (
      <Paper  component="footer" square variant="outlined" sx={{mt: '23em'}}>
          <Container maxWidth="lg" >
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "center",
                display: "flex",
                my:1
                
              }}>
            </Box>
            <Box sx={{
                flexGrow: 1,
                justifyContent: "center",
                display: "flex",
                mb: 2,
              }}>
              <Typography variant="caption" >
                Copyright ©2022. Made by Ilia Abdelaui
              </Typography>
            </Box>
          </Container>
      </Paper>
    )
}

export default Footer