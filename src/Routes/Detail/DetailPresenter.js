import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import noPoster from "../../img/popcorn.png";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5;
`;

const Content = styled.div`
    display: flex;
    height: 100%;
`;

const Cover = styled.div`
    width: 40%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    z-index: 1;
    background-position: center center;
    background-size: cover;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 60%;
    margin-left: 30px;
    z-index: 1;
`;

const Title = styled.h3`
    font-size: 32px;
    margin-bottom: 10px;
`;

const ItemContainer = styled.div`
    margin: 20px 0;
`;

const Item = styled.span`
    font-size: 18px;
`;

const Divider = styled.span`
    margin: 0 10px;
`;

const OverView = styled.p`
    font-size: 16px;
    opacity: 0.7;
    line-height: 1.5;
    width: 50%;
`;

const DetailPresenter = ({ result, error, loading }) => (
    loading ? (
        <Loader />
    ) : (
            <Container>
                <Backdrop
                    bgImage={
                        result.backdrop_path ?
                            `https://image.tmdb.org/t/p/original${result.backdrop_path}` :
                            noPoster
                    }
                />
                <Content>
                    <Cover
                        bgImage={
                            result.poster_path ?
                                `https://image.tmdb.org/t/p/original${result.poster_path}` :
                                noPoster
                        }
                    />
                    <Data>
                        <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                        <ItemContainer>
                            <Item>
                                {result.release_date ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4)}
                            </Item>
                            <Divider>•</Divider>
                            <Item>
                                {result.runtime ? result.runtime : result.episode_run_time[0]} min
                            </Item>
                            <Divider>•</Divider>
                            <Item>
                                {result.genres &&
                                    result.genres.map((genre, index) =>
                                        index === result.genres.length - 1 ? genre.name : `${genre.name}/ `
                                    )
                                }
                            </Item>
                        </ItemContainer>
                        <OverView>
                           {result.overview} 
                        </OverView>
                    </Data>
                </Content>
            </Container>
    )
);


DetailPresenter.propTypes = {
    result:PropTypes.object,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired
}

export default DetailPresenter;