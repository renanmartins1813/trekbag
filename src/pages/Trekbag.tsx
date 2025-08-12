import BackgroundHeading from "../components/BackgroundHeading";
import Container from "../components/Container";
import Footer from "../components/Footer";
import ItemsContextProvider from "../context/ItemsContextProvider";

export default function Trekbag() {
    return (
        <>
            <BackgroundHeading />
            <ItemsContextProvider>
                <Container />
            </ItemsContextProvider>
            <Footer />
        </>
    )
}

