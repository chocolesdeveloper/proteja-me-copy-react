import { Header } from "../../components/Header";
import { HeaderHome } from "./components/HeaderHome";
import { MainHome } from "./components/MainHome";
import { AsideHome } from "./components/AsideHome";
import { FooterHome } from "./components/FooterHome";

export function Home () {

    return (
        <>
            <Header />

            <HeaderHome />
            <MainHome />
            <AsideHome />
            <FooterHome />
        </>
    );
}