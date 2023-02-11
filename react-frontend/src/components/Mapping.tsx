import { Button, Grid, MenuItem, Select } from "@material-ui/core"

type Props = {

}

function Mapping(props: Props) {
    return <Grid container>
        <Grid item xs={12} sm={3}>
            <form>
                <Select fullWidth>
                    <MenuItem value="1">
                        <em>Selecione uma corrida</em>
                    </MenuItem>
                </Select>
                <Button type="submit" color="primary" variant="contained">Iniciar uma corrida</Button>
            </form>
        </Grid>
        <Grid item xs={12} sm={9}>
            <div id="map"></div>
        </Grid>
    </Grid>
}

export default Mapping